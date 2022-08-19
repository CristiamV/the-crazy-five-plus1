import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { EncodeStorageService } from '../encode-storage/encode-storage.service';

/**
 * Servicio para manejo de datos en local
 */
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  isBrowser = false;

  /**
   * Constructor del servicio local storage
   * @param platformId, servicio para identificación de plataforma
   */
  constructor(
    private storageService: EncodeStorageService,
    @Inject(PLATFORM_ID) platformId: any) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

    /**
  ** Guarda dato Json
  * @param key: string
  * @param value: any
  */
  setJsonValue(key: string, value: any) {
    if (this.isBrowser){
      this.storageService.secureLocalStorage.setItem(key, value);
    }
  }

  /**
  ** Obtiene dato Json
  * @param key: string
  * @returns dato
  */
  getJsonValue(key: string) {
    if (this.isBrowser) {
      return this.storageService.secureLocalStorage.getItem(key);
    }
  }

  /**
  ** Elimina dato Json
  * @param id:string
  */
  removeItemJson(id:string) {
    if (this.isBrowser) {
      //this.removeItem(this.storageService.secureStorage.key(id))
      this.storageService.secureLocalStorage.setItem(id, null);
    }
  }

  /**
  ** Limpia el token de storage
  */
  clearToken() {
    if (this.isBrowser)
      return this.storageService.secureLocalStorage.clear();
  }

  /**
   * Obtiene los datos bajo una key
   * @param key, llave para obtener datos
   * @returns datos del almacenamiento
   */
  getItem(key: string): any | null {
    if (this.isBrowser) {
      return localStorage.getItem(key);
    }
  }

  /**
   * Setea en el almacenamiento local datos bajo una llave
   * @param key, llave identificadora
   * @param value, datos para almacenar
   * @param isJson, bandera para elegir el metodo de almacenamiento
   */
  setItem(key: string, value: any, isJson?: boolean): void {
    if (this.isBrowser) {
      if (!isJson) {
        localStorage.setItem(key, value);
      } else {
        localStorage.setItem(key, JSON.stringify(value));
      }
    }
  }

  /**
   * Elimina datos del almacenamiento bajo una llave
   * @param key, llave identificadora
   */
  removeItem(key: string): void {
    if (this.isBrowser) {
      localStorage.removeItem(key);
    }
  }

  /**
   * Remueve los datos del almacenamiento
   */
  clearItems(): void {
    if (this.isBrowser){
      localStorage.clear();
    }
  }
}
