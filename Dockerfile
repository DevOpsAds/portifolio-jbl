# Use uma imagem base com o Node.js instalado
FROM node:14

# Defina o diretório de trabalho na imagem
WORKDIR /app

# Copie os arquivos do aplicativo para a imagem
COPY package.json .
COPY package-lock.json .
COPY . .

# Instale as dependências do aplicativo
RUN npm install

# Exponha a porta em que o aplicativo será executado
EXPOSE 3000

# Comando para iniciar o aplicativo quando o contêiner for executado
CMD ["npm", "start"]

