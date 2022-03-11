package databases

import (
	"errors"
	"github.com/caos/orbos/mntr"
	"github.com/caos/orbos/pkg/git"
	"github.com/caos/orbos/pkg/kubernetes"
	"github.com/caos/orbos/pkg/tree"
	"github.com/caos/zitadel/operator/api/database"
	"github.com/caos/zitadel/operator/api/zitadel"
	"github.com/caos/zitadel/operator/database/kinds/databases/managed"
	orbdb "github.com/caos/zitadel/operator/database/kinds/orb"
)

func GitOpsClear(
	monitor mntr.Monitor,
	k8sClient kubernetes.ClientInt,
	gitClient *git.Client,
) error {
	return clear(monitor, k8sClient, true, func() (*tree.Tree, error) {
		return gitClient.ReadTree(git.DatabaseFile)
	}, func() (*tree.Tree, error) {
		return gitClient.ReadTree(git.ZitadelFile)
	})
}

func CrdClear(
	monitor mntr.Monitor,
	k8sClient kubernetes.ClientInt,
) error {
	return clear(monitor, k8sClient, false,
		func() (*tree.Tree, error) {
			return database.ReadCrd(k8sClient)
		}, func() (*tree.Tree, error) {
			return zitadel.ReadCrd(k8sClient)
		})
}

func clear(
	monitor mntr.Monitor,
	k8sClient kubernetes.ClientInt,
	gitops bool,
	databaseTree func() (*tree.Tree, error),
	zitadelTree func() (*tree.Tree, error),
) error {
	dbTree, err := databaseTree()
	if err != nil {
		return err
	}
	if dbTree == nil || dbTree.Original == nil {
		return errors.New("backups and restores are only supported for managed databases, but found no specs")
	}

	current := &tree.Tree{}
	query, _, _, _, _, _, err := orbdb.AdaptFunc("", nil, gitops, managed.Clean)(monitor, dbTree, current)
	if err != nil {
		return err
	}
	queried := map[string]interface{}{}
	ensure, err := query(k8sClient, queried)
	if err != nil {
		return err
	}

	if err := ensure(k8sClient); err != nil {
		return err
	}

	return nil
}
