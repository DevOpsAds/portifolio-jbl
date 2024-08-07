#!/bin/bash

# Atualiza a lista de pacotes
echo "Atualizando a lista de pacotes..."
sudo apt update

# Atualiza os pacotes instalados
echo "Atualizando os pacotes instalados..."
sudo apt upgrade -y

# Limpa pacotes desnecessários
echo "Removendo pacotes desnecessários..."
sudo apt autoremove -y

echo "Atualização concluída."

