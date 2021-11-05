import React from 'react'

class Card extends React.Component{
    render(){
        return(
            <div className="col-lg-6 col-sm-12 p-2">
                <div className="card">
                    <div className="card-body row">
                        {/** Menampilkan gambar / cover */}
                        <div className="col-5">
                            <img src={this.props.cover} className="img" height='200'/>
                        </div>
                        {/** Menampilkan deskripsi */}
                        <div className="col-7">
                            <h5 className="text-info">
                                {this.props.judul}
                            </h5>
                            <h6 className="text-dark">
                                Penulis : {this.props.penulis}
                            </h6>
                            <h6 className="text-dark">
                                Penerbit : {this.props.penerbit}
                            </h6>
                            <h6 className="text-danger">
                                Harga : Rp {this.props.harga}
                            </h6>
                            {/** button untuk mengedit */}
                            <button className="btn btn-sm-primary m-1" onClick={this.props.onEdit}>
                                Edit
                            </button>
                            {/** button untuk menghapus */}
                            <button className="btn btn-sm-danger m-1" onClick={this.props.onDrop}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Card