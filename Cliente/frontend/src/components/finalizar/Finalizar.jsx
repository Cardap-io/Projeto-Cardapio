import React,{Component} from 'react'

export default class Finalizar extends Component{
    constructor(props){
        super(props)
    }

    calcSubtotal(preco){
        
    }

    componentDidMount(){
        if(Object.keys(this.props.carrinho).lenght < 1 ){
            this.props.getCartByUserId()
        } else{
            this.props.getCheckoutUrl(this.props.carrinho.id)
        }
    }

    componentDidUpdate(){
        if(!this.props.url && Object.keys(this.props.carrinho).length >1){
            this.props.getCheckoutUrl(this.props.carrinho.id)
        }
    }

    renderItens({itens}){
        return Object.keys(itens).map(item => 
            <div key={item} className="row">
                <div className="col">
                    {itens[item].item.nome}
                </div>
                <div className="col">
                    R${itens[item].item.preco} X {itens[item].quantidade}
                </div>
            </div>
        )
    }



    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h4>Finalizar compra</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Revise os itens da sua compra
                    </div>
                </div>
                <div className="container">
                    {Object.keys(this.props.carrinho).length >0 && 
                    this.renderItens(this.props.carrinho.itens)}
                </div>
                <div className="row">
                    <div className="col">
                        Subtotal:
                        {this.props.carrinho.preco}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button className="btn btn-danger"><a href={this.props.url}>Confirmar</a></button>
                    </div>
                </div>
            </div>
        )
    }
}