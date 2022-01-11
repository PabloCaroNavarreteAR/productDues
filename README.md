# Product Dues

Este componente permite renderizar el SellingPrice, mediante el contexto del producto, y dividirlo por la cantidad de cuotas que se configure desde site editor. Añadiendo tambien un logo del método de pago, un CTA para abrir un modal y conocer más acerca de este método de pago. 

![image](https://i.ibb.co/GFT1MZP/goCuotas.png)


## Configuracion

### Paso 1 - Agregar el componente en pdp

El componente depende del contexto de producto, por lo que debe agregarse dentro del contexto como tal, con props vacias

```json{
"productDues":{
  "props":{}
}
```
  
Despues de agregar el componente en el contexto indicado, tenemos disponible desde `site editor` tenemos disponibles las siguientes propiedades:

![image](https://i.ibb.co/hgwHGFt/screencapture-test-panacom-myvtex-admin-cms-site-editor-exemple-product-459-p-2022-01-11-16-39-24.png) 


| Propiedad          |  Descripcion |
| --------------------| -------- |
| `ocultar/mostrar`         | Oculta/muestra el componente -> por default esta oculto. |
| `Cantidad de cuotas`      | Permite definir la cantidad de cuotas por las que se divide el Selling Price, por default es 4.|
| `Texto de descripcion`         | Permite editar el texto de descripción -> por default: "cuotas con tarjeta de DÉBITO y sin interés de".|
| `Logo`      | Permite agregar el logo del servicio -> por default: logo GoCuotas |
| `Alt Logo` | Permite agregar alt de la imagen del logo. |
| `Texto del link` | Permite editar el texto del link -> por default: ver más |
| `Imagen del Modal (Mobile/desktop)`           | Permite agregar una imagen con la descripción del servicio en un modal -> por default ![image](https://www.gocuotas.com/assets/vtex/banner_desktop.jpg) | 
| `Alt imagen del Modal (Modal/desktop)`           | Permite agregar alt de la imagen modal. por default -> "Go Cuotas" |
