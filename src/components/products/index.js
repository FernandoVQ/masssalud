import React from "react";
import Img1 from "../../images/aspirina.jpg";
export const ProductList = () => {
    return (
        <>
            <h1 className="title">Productos</h1>
            <div className="products">
                <div className="product">
                    <a href="#">
                        <div className="product_img">
                            <img src={Img1} alt="" />
                        </div>
                    </a>
                    <div className="product_footer">
                        <h1>Title</h1>
                        <p>Categoria</p>
                        <p className="price">$230</p>
                    </div>
                    <div className="buttom">
                        <buttom className="btn">
                            Añadir al carrito
                        </buttom>
                        <div>
                            <a href="#" className="btn">Vista</a>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <a href="#">
                        <div className="product_img">
                            <img src={Img1} alt="" />
                        </div>
                    </a>
                    <div className="product_footer">
                        <h1>Title</h1>
                        <p>Categoria</p>
                        <p className="price">$230</p>
                    </div>
                    <div className="buttom">
                        <buttom className="btn">
                            Añadir al carrito
                        </buttom>
                        <div>
                            <a href="#" className="btn">Vista</a>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <a href="#">
                        <div className="product_img">
                            <img src={Img1} alt="" />
                        </div>
                    </a>
                    <div className="product_footer">
                        <h1>Title</h1>
                        <p>Categoria</p>
                        <p className="price">$230</p>
                    </div>
                    <div className="buttom">
                        <buttom className="btn">
                            Añadir al carrito
                        </buttom>
                        <div>
                            <a href="#" className="btn">Vista</a>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <a href="#">
                        <div className="product_img">
                            <img src={Img1} alt="" />
                        </div>
                    </a>
                    <div className="product_footer">
                        <h1>Title</h1>
                        <p>Categoria</p>
                        <p className="price">$230</p>
                    </div>
                    <div className="buttom">
                        <buttom className="btn">
                            Añadir al carrito
                        </buttom>
                        <div>
                            <a href="#" className="btn">Vista</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}       