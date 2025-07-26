echo "Rodando migrations..."
npx sequelize-cli db:migrate

echo "Rodando seeds..."
npx sequelize-cli db:seed:all

echo "Iniciando o servidor..."
npm run dev
