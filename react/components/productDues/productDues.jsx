import React, { useState } from 'react'
import { useProduct } from 'vtex.product-context';
import CurrencyFormat from 'react-currency-format';
import { Modal, ButtonPlain } from 'vtex.styleguide';
import { useRuntime } from 'vtex.render-runtime'
import { useCssHandles } from 'vtex.css-handles'
import './style.css';

const productDues = (props) => {
    const CSS_HANDLES = [
        'productDues--container',
        'productDues--text',
        'productDues--logo'
    ]
    const { handles } = useCssHandles(CSS_HANDLES)
    const runtime = useRuntime();
    const isMobile = runtime.deviceInfo.isMobile;

    const product = useProduct();
    const productPrice = product.product.priceRange.sellingPrice.lowPrice;
    const {logo, cuotas, isVisible, text, imagenModal, imagenModalDescription, imagenModalMobile, imagenModalDescriptionMobile, textLink} = props;
    const [isOpen, setOpen] = useState(false)

    return (
        <>
        {isVisible && 
            <div className={`${handles['productDues--container']} flex items-center flex-wrap mb5`}>
                <span className={`flex items-center flex-wrap ${handles['productDues--text']}`}>
                    ó {cuotas} {text}  
                    <CurrencyFormat
                        value={productPrice/cuotas}
                        decimalScale={2}
                        displayType={'text'}
                        prefix={'$'}
                        className={`${handles['productDues--text']} db ml2 mr2`}
                    /> con
                    <img src={logo && logo} alt="" className={`${handles['productDues--logo']} db p5 ml2 mr2`} height="30"/>
                <ButtonPlain onClick={() => setOpen(!isOpen)}>
                    {textLink}
                </ButtonPlain>
                </span>
                <Modal centered isOpen={isOpen} onClose={() => setOpen(!isOpen)}>
                    {
                        isMobile ? 
                        <img src={imagenModalMobile ? imagenModalMobile : imagenModal} alt={imagenModalDescriptionMobile}/>
                        : 
                        <img src={imagenModal} alt={imagenModalDescription}/>
                    }
                </Modal>
            </div>
        }
        </>
    );
}
productDues.getSchema = props => {
    return {
        title: 'productDues',
        type: 'object',
        properties:{
            isVisible:{
                title: 'Mostrar/Ocultar',
                type: 'boolean'
            },
            cuotas:{
                title:'Cantidad de Cuotas',
                type:'number',
                widget: {
                    "ui:widget": "updown"
                }
            },
            text:{
                title:'Descripcion',
                type:'string'
            },
            logo:{
                title:'Logo',
                type:'string',
                widget: {
                    'ui:widget': 'image-uploader'
                }
            },
            altLogo:{
                title:'Alt de imagen Logo',
                type:'string'
            },
            textLink:{
                title:'texto del link',
                type:'string'
            },
            imagenModal:{
                title:'Imagen Modal Desktop',
                type:'string',
                widget: {
                    'ui:widget': 'image-uploader'
                }
            },
            imagenModalDescription:{
                title:'Alt de imagen Modal',
                type:'string'
            },
            imagenModalMobile:{
                title:'Imagen Modal Mobile',
                type:'string',
                widget: {
                    'ui:widget': 'image-uploader'
                }
            },
            imagenModalDescriptionMobile:{
                title:'Alt de imagen Modal Desktop',
                type:'string'
            }
        }
    }
}
productDues.defaultProps = {
    cuotas:'4',
    text:'cuotas con tarjeta de DÉBITO y sin interés de',
    logo:'https://www.gocuotas.com/assets/logo-mobile.svg',
    altLogo:'GO Cuotas',
    textLink:'Conoce más',
    imagenModal:'https://doto.vtexassets.com/assets/vtex.file-manager-graphql/images/2c2433a7-579b-4c45-94d0-53e02dfcf93c___61036451481638228342953b08fa0189.jpg',
    imagenModalDescription:'',
    imagenModalMobile:'https://doto.vtexassets.com/assets/vtex.file-manager-graphql/images/2c2433a7-579b-4c45-94d0-53e02dfcf93c___61036451481638228342953b08fa0189.jpg',
    imagenModalDescriptionMobile:''
}
export default productDues;
