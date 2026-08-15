#!/usr/bin/env node

// Реализуйте утилиту командной строки page-loader,сдлуфк
// которая скачивает страницу из сети и кладёт в указанную директорию
// (по умолчанию в директорию запуска программы).
// Программа должна возвращать полный путь к загруженному файлу.

import { program } from "commander";

// page-loader --output /var/tmp https://ru.hexlet.io/courses

const parser = (page) => {
  console.log(page);
};

program
  .name("page-loader")
  .version("0.0.1")
  .option("-o, --output [dir]", "output dir", "/home/user/current-dir")
  .action(parser) // Когда программа будет запущена без какой-то специальной команды, выполни функцию
  .arguments("<page>")
  .parse(process.argv);
