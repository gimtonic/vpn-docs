---
sidebar_position: 1
---

# Urls

Настройки будут передаваться в виде url-а

Вот например

```bash
vless://UUID@IP_ADDRESS:443?type=tcp&security=reality&pbk=REALITY_PUBLIC_KEY&fp=chrome&sni=www.microsoft.com&sid=REALITY_SID&spx=%2F&flow=xtls-rprx-vision#main-inbound-client-1
```
где:

- UUID - уникальный id пользователя
- IP_ADDRESS - IP адресс сервера
- REALITY_PUBLIC_KEY - публичный ключ
- REALITY_SID - специальный Id

Эти значения нужно будет вытащить из ссылки и сохранить в настройки вашего клиента.

Либо есть второй способ установки.
- Сохранить ссылку в буфер обмена (обычно комбинация клавиш CTRL+C)
- В настройках вашего клиента импортнуть ссылку из буфера (например для nekobox desktop) Server -> Add profile from clipboard
