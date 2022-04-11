# git-config

git config --global user.name "Nurzhigit Ongalov"
git config --global user.email "nur.onalov@gmail.com"

git config --list           # посмотреть настройки

git config --global core.autocrlf true
git config --global core.quotepath off
git config --global core.safecrlf warn
git config --global init.defaultBranch main

git init                    # инициализация репозитория
git add .                   # добавить все файлы в трек
git commit -m  "описание"   # сделать коммит
git status                  # показывает текущий статус
git diff                    # показывает текущие изменения
git diff --color-words      # показывает изменения более развернуто 


git checkout .              # вернуться к последнему коммиту
git checkout script.js      # вернуться к последнему коммиту этого файла