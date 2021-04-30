import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                 <div className="mt-10 md:mt-32 pb-10 pt-1 text-center" style={{color:'#fff', backgroundColor: '#00878a'}}>
                        <div className="row pt-2">
                                <p className="item-center text-center text-2xl font-bold">
                                    Все права защищены © 2021
                                </p>
                        </div>
                </div>
            </React.Fragment>
        )
    }
}
