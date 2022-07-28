import logo from "../icons/logo.svg";

export const ProductList = () => {
  return (
    <div className="container">
      <img src={logo} alt="logo" />
      <div className="d-flex justify-content-between mt-5">
        <h3>Ürün Listesi</h3>
        <button className="btn btn-primary px-4">Yeni Ekle</button>
      </div>

      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">Ürün Resmi</th>
            <th scope="col">Ürün Adı</th>
            <th scope="col">Ürün Açıklaması</th>
            <th scope="col">Fiyat</th>
            <th scope="col">Detay</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>dasdas</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>1</td>
            <td>dasdas</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
