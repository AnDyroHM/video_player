import React, { Component } from 'react'
export default class Progressive extends Component {
    componentDidMount = () => {
        var placeholder = document.querySelector('.placeholder'),
            small = placeholder.querySelector('.img-small')
        var img = new Image();
        img.src = small.src;
        img.onload = function () {
            small.classList.add('loaded');
            console.log("Cargada...")
        };
        var imgLarge = new Image();
        imgLarge.src = placeholder.dataset.large;
        imgLarge.onload = function () {
            imgLarge.classList.add('loaded');
        };
        placeholder.appendChild(imgLarge);
    }
    render() {
        return (
            <div data-element='progressive-image-element' className='full-height' >
                <div className='placeholder full-width full-height' data-large={this.props.imageOriginal}>
                    <img src={this.props.placeholder} className='full-height img-small' width="auto" alt="" srcset="" />
                    <div Style={"padding-bottom:66.6%"} ></div>
                </div>
            </div>
        )
    }
}