#check if mongo stopped
mongodb-server/bin/mongo admin --eval 'db.shutdownServer()' > logs/mongo