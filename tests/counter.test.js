import { afterEach, describe, expect, test } from "vitest";
import { setupCounter } from "../src/scripts/counter";

describe('testes do contador', () => {
  let elementListener = () => {};
  let eventType = '';

  const elementMock = {
    innerHTML: '',
    addEventListener: (type, listener) => {
      elementListener = listener;
      eventType = type;
    },
  };

  afterEach(() => {
    eventType = '';
    elementListener = () => {};

    elementMock.innerHTML = '';
  });

  test('testa se a inicialização está sendo feita corretamente', () => {
    setupCounter(elementMock);
  
    expect(elementMock.innerHTML).toBe('count is 0');
    expect(eventType).toBe('click');
  });

  test('testa se ao clicar o contador é incrementado', () => {
    setupCounter(elementMock);

    expect(elementMock.innerHTML).toBe('count is 0');

    elementListener();

    expect(elementMock.innerHTML).toBe('count is 1');
  });
});
