cd ../
cd backend
mvn spring-boot:run
echo %time% > init-backend.tmp
pause
del init-backend.tmp
exit
