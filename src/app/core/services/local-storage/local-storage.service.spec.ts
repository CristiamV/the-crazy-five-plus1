import { TestBed } from '@angular/core/testing';
import { EncodeStorageService } from '../encode-storage/encode-storage.service';
import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;
  let encodeStorageService: EncodeStorageService;
  let platformIdMock: any;

  beforeEach(() => {
    platformIdMock = {

    };

    TestBed.configureTestingModule({});
    service = new LocalStorageService(encodeStorageService, platformIdMock);
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test getItem, SetItem No JSON', () => {
    service.setItem('transactionID', '435fdsfs343');
    service.getItem('transactionID');
    expect(service.getItem('transactionID')).toEqual('435fdsfs343');
  });

  it('test setItem JSON', () => {
    const value = {
      animals: [
        'dog',
        'cat',
        'fish'
      ]
    };
    service.setItem('animals', value, true);
    expect(service.getItem('animals')).toContain('dog');
  });

  it('test removeItem', () => {
    service.setItem('animals', 'catpet');
    service.removeItem('animals');
    expect(service.getItem('animals')).toBeFalsy();
  });

  it('test clearItems', () => {
    service.setItem('animals', 'catpet');
    service.setItem('flag', 'red');
    service.clearItems();
    expect(service.getItem('flag')).toBeFalsy();
  });
});
