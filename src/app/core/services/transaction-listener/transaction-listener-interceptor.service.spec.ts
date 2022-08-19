import { TestBed } from '@angular/core/testing';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { TransactionListenerInterceptorService } from './transaction-listener-interceptor.service';
import { RouterTestingModule } from '@angular/router/testing';
import { LoaderService } from '../../../../app/data/services/loader.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OverlayModule } from '@angular/cdk/overlay';
import { EncodeStorageService } from '../encode-storage/encode-storage.service';

describe('TransactionListenerIterceptorService tests', () => {
  let platformIdMock: any;
  let serviceStorage: LocalStorageService;
  let httpTestingController: HttpTestingController;
  let mockLoggerSvc: any;
  let httpClient: HttpClient;
  let loaderService: LoaderService;
  let interceptor: TransactionListenerInterceptorService;
  let encodeStorageService: EncodeStorageService;
  beforeEach(() => {
    mockLoggerSvc = {
      info: jest.fn(),
      success: jest.fn(),
      error: jest.fn(),
    };

    platformIdMock = {};

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, OverlayModule],
      providers: [MatSnackBar,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TransactionListenerInterceptorService,
          multi: true,
        },
      ]});

    serviceStorage = new LocalStorageService(encodeStorageService, platformIdMock);
    serviceStorage = TestBed.inject(LocalStorageService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    interceptor = TestBed.inject(TransactionListenerInterceptorService);
    loaderService = TestBed.inject(LoaderService);
  });

    it('should be created', () => {
      expect(interceptor).toBeTruthy();      
    });

   it('should Not Acceptable ErrorEvent', () => {
      serviceStorage.setItem('X-transactionID', '4589745');
      httpClient.get('https://www.demo.com/test').subscribe();    
      const req = httpTestingController.expectOne('https://www.demo.com/test');
     req.error(new ErrorEvent('Network error.'), {
       status: 401,
       statusText: 'Invalid access.'
     });
     expect(req.request.headers.get('X-transactionID')).toEqual(null);
   });

  it('should Not Acceptable ErrorEvent', () => {
    serviceStorage.setItem('X-transactionID', '4589745');
    httpClient.get('https://www.demo.com/test').subscribe();
    const req = httpTestingController.expectOne('https://www.demo.com/test');
    req.error(new ErrorEvent('Network error.'), {
      status: 401,
      statusText: 'Invalid access.'
    });
    expect(req.request.headers.get('X-transactionID')).toEqual(null);
  });

  it('should Not Acceptable ErrorEvent', () => {
    serviceStorage.setItem('X-transactionID', undefined);
    httpClient.get('https://www.demo.com/datos-propietario').subscribe();
    const req = httpTestingController.expectOne(
      'https://www.demo.com/datos-propietario'
    );
    req.flush([]);
    expect(req.request.headers.get('X-transactionID')).toEqual(null);
  });
});



