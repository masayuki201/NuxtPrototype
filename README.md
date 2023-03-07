### git cloneして、開発ディレクトリをローカル環境へクローンします
` git clone git@github.com:GuildWorks/sbhc-jobchat-front.git `

### sbhc-jobchat-frontに移動
` cd sbhc-jobchat-front `

### docker-compose.ymlがある階層で、docker(コンテナ)を立ち上げる
` docker compose up -d `

###  docker(コンテナ)の中に入る
` docker compose exec playwrite bash `

### #/srcに移動
` cd src `

### インストール
` yarn install `
or 
` npm install `

` yarn dev `
or 
` npm run dev `
