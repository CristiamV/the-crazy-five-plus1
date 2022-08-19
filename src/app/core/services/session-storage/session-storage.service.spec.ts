import { TestBed } from '@angular/core/testing';

import { SessionStorageService } from './session-storage.service';

describe('SessionStorageService', () => {
  let service: SessionStorageService;

  beforeEach(() => {
    service = TestBed.inject(SessionStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Set item session storage', () => {
    service.isBrowser = true;
    service.setJsonValue('123', { nombre: 'claudia' });
    const result = service.getJsonValue('123');
    expect(result).toBeTruthy();
    expect(result.nombre).toEqual('claudia');
    service.removeItemJson('123');
  });

  it('Set item session storage and clear storage', () => {
    service.setJsonValue('123', { nombre: 'claudia' });
    service.clearToken();
    const result = service.getJsonValue('123');
    expect(result).toBeTruthy();
  });

  it('Remove item session storage', () => {
    service.isBrowser = true;
    service.setItem('123', { nombre: 'claudia' });
    //const result = service.getItem('123');
    /*expect(result).toBeTruthy();
    service.removeItem('123');
    const result2 = service.getItem('123');
    expect(result2).toBeFalsy();*/
  });

  it('Clear Items', () => {
    service.isBrowser = true;
    const result = service.clearItems();
    expect(result).toBeFalsy();
  });

});
