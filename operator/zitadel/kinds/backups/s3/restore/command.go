package restore

import (
	"strconv"
	"strings"
)

func getCommand(
	timestamp string,
	bucketName string,
	backupName string,
	certsFolder string,
	assetEndpoint string,
	assetAKIDPath string,
	assetSAKPath string,
	sourceAKIDPath string,
	sourceSAKPath string,
	sourceEndpoint string,
	dbURL string,
	dbPort int32,
) string {

	backupCommands := make([]string, 0)
	backupCommands = append(backupCommands, "export "+backupNameEnv+"="+timestamp)

	backupCommands = append(backupCommands,
		strings.Join([]string{
			"/backupctl",
			"restore",
			"s3",
			"--backupname=" + backupName,
			"--backupnameenv=" + backupNameEnv,
			"--asset-endpoint=" + assetEndpoint,
			"--asset-akid=" + assetAKIDPath,
			"--asset-sak=" + assetSAKPath,
			"--source-endpoint=" + sourceEndpoint,
			"--source-akid=" + sourceAKIDPath,
			"--source-sak=" + sourceSAKPath,
			"--source-bucket=" + bucketName,
			"--host=" + dbURL,
			"--port=" + strconv.Itoa(int(dbPort)),
			"--certs-dir=" + certsFolder,
			"--configpath=/rsync.conf",
		}, " ",
		),
	)

	return strings.Join(backupCommands, " && ")
}
