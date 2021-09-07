package zitadel

import (
	"github.com/caos/orbos/mntr"
	"github.com/caos/orbos/pkg/git"
	"github.com/caos/orbos/pkg/kubernetes"
	"github.com/caos/orbos/pkg/tree"
	"github.com/caos/zitadel/operator/api/zitadel"
	orbz "github.com/caos/zitadel/operator/zitadel/kinds/orb"
)

func GitOpsListBackups(
	monitor mntr.Monitor,
	gitClient *git.Client,
	k8sClient kubernetes.ClientInt,
) (
	[]string,
	error,
) {
	desired, err := gitClient.ReadTree(git.ZitadelFile)
	if err != nil {
		return nil, err
	}

	return listBackups(monitor, k8sClient, desired)
}

func CrdListBackups(
	monitor mntr.Monitor,
	k8sClient kubernetes.ClientInt,
) (
	[]string,
	error,
) {
	desired, err := zitadel.ReadCrd(k8sClient)
	if err != nil {
		return nil, err
	}

	return listBackups(monitor, k8sClient, desired)
}

func listBackups(
	monitor mntr.Monitor,
	k8sClient kubernetes.ClientInt,
	desired *tree.Tree,
) (
	[]string,
	error,
) {
	backups, err := orbz.BackupListFunc()(monitor, k8sClient, desired)
	if err != nil {
		return nil, err
	}

	return backups, nil
}
