#montando uma imagem para distribuir
#este arquivo substitui: 
#docker run -d -p 8080:3000 -v "$(pwd):var/www" -w "/var/www" node npm start 
#montando uma imagem a partir de uma imagem base
FROM node:14.15.5
#maintainer
LABEL maintainer="eliassoaressouza@gmail.com"
#setando variaveis de ambiente
ENV NODE_ENV=production
#copiar o que voce indicar pra dentro da imagem 
#. copirar a partir da raiz
COPY . /var/www
#pasta que irá executar o comando
WORKDIR /var/www
#executa ro comando
RUN npm install
#qual é a porta que o container usa?
EXPOSE 3000
#comando executado assim que carregar o seu container
ENTRYPOINT npm run start:dev


#comando para bildar imagem a partir do comando


#docker build -f dockerfile -t meusativos-api/node .

#criando o container

#docker run -d -p 12345:3000 meusativos-api/node



