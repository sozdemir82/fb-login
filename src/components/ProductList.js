import logo from "../icons/logo.svg";
import arrow from "../icons/arrow.svg";
import React from "react";

export class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(
        (products) => {
          this.setState({ products: products });
        },
        (error) => {
          alert(error);
        }
      );
  }

  render() {
    return (
      <div className="container">
        <img src={logo} alt="logo" />

        <div className="d-flex justify-content-between mt-5">
          <h3>Ürün Listesi</h3>
          <button className="btn btn-primary px-4">Yeni Ekle</button>
        </div>

        <table className="table mt-3">
          <thead>
            <tr>
              <th>Ürün Resmi</th>
              <th>Ürün Adı</th>
              <th>Ürün Açaıklaması</th>
              <th>Fiyat</th>
              <th>Detay</th>
            </tr>
          </thead>

          <tbody>
            {this.state.products.map((products) => (
              <tr>
                <td>{products.image}</td>
                <td>{products.title}</td>
                <td>{products.description}</td>
                <td>{products.price}</td>
                <td className="btn-details text-center">
                  <img src={arrow} alt="details" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
