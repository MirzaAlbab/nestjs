import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { setupApp } from '../src/setup-app';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    // setupApp(app);
    await app.init();
  });

  it('handle register', () => {
    return request(app.getHttpServer())
      .post('/auth/register')
      .send({ name: 'test', email: 'test@gmail.com', password: 'test' })
      .expect(201)
      .then(({ body }: request.Response) => {
        expect(body.id).toBeDefined();
        expect(body.name).toBe('test');
        expect(body.email).toBe('test@gmail.com');
      });
  });

  it('login after registration', async () => {
    const email = 'test1@gmail.com';
    const response = await request(app.getHttpServer())
      .post('/auth/register')
      .send({ name: 'test', email, password: 'test' })
      .expect(201);

    const cookie = response.get('Set-Cookie');
    const { body } = await request(app.getHttpServer())
      .get('/auth/whoami')
      .set('Cookie', cookie)
      .expect(200);

    expect(body.email).toBe(email);
    expect(body.name).toBe('test');
  });
});
