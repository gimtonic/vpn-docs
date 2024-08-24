---
sidebar_position: 2
---

# Ubuntu

1. Устанавливаем пакет

```bash
sudo apt install openvpn
```

2. Затем создаем файл ```/etc/openvpn/openi.conf```
и переносим в него значения, которые мы вам пришлём

3. Перезагружаем
```bash
systemctl start openvpn@openi
```

4. Добавляем пакет в автозапуск
```bash
systemctl enable openvpn@openi
```
