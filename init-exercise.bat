cd init
@echo off
start "init-frontend" init-frontend.bat
start "init-backend" init-backend.bat
    @ping -n 1 127.0.0.1 > nul
:loop
@echo Processing......
if not exist *.tmp goto :next
    @ping -n 5 127.0.0.1 > nul
goto loop
:next
@echo Done Processing!