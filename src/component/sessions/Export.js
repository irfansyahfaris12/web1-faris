import React, { Component } from 'react'
import doc from "../../aset/icon/doc-icon.svg"
import pdf from "../../aset/icon/pdf-icon.svg"
import pptx from "../../aset/icon/pptx-icon.svg"
import psd from "../../aset/icon/psd-icon.svg"
import "../../style/Export.scss"

export default class Export extends Component {
    
    render() {
        return (
            <div className={this.props.style}>
                <div onClick={this.props.hidden} className="transparant" ></div>
                <div className="export" >
                    <h5>Export</h5>
                    <div className="wrap-file">
                        <div className="file">
                            <img src={doc} alt="doc" />
                            <p>as Document</p>
                        </div>
                        <div className="file">
                            <img src={pdf} alt="pdf" />
                            <p>as PSD</p>
                        </div>
                        <div className="file">
                            <img src={psd} alt="psd" />
                            <p>as PSD</p>
                        </div>
                        <div className="file">
                            <img src={pptx} alt="pptx" />
                            <p>as Persentation</p>
                        </div>
                    </div>
                        <h5>Save to</h5>
                    <div className="folder">
                        <span>folder</span>
                        <button className="btn">Send</button>
                    </div>
                    <button className="tombol-export">export</button>
                </div>
            </div>
        )
    }
}
