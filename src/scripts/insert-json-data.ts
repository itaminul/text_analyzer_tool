import { NestFactory } from '@nestjs/core';
import { JsonInsertService } from './json-insert.service';
import { AppModule } from 'src/app.module';
async function runInsertion() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const jsonInsertService = app.get(JsonInsertService);
  await jsonInsertService.insertJsondataFromFile('json-data.json');
  await app.close();
}

runInsertion();
