Мировые часы
===

Наверняка вы видели в офисах многих компаний, установленные часы, показывающие время в разных столицах мира:
* New York
* Moscow
* London
* Tokyo 

И т.д.

![Watches](./assets/watches.png)

Общая механика:

1. Вы заполняете поля название и временная зона (указываете смещение в часах относительно Гринвича) и нажимаете кнопку "Добавить"
1. Часы автоматически добавляются и (что самое важное) часы начинают "тикать", т.е. отсчитываются секунды, минуты и часы
1. При нажатии на крестик рядом с часами часы автоматически удаляются, при этом все подписки (`setTimeout`, `setInterval` и другие) должны вычищаться в соответствующем методе жизненного цикла

Результат:
![Watches](./assets/result.jpg)