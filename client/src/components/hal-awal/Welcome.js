import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PaperMod from '../../modify-components/Komponen-Paper/PaperMod.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './welcome.css';

const muiTheme = getMuiTheme({palette: {
        // accent1Color: deepOrange500
    }});

const styles = {};

const Text = {

    Judul: "Selamat Datang di CMS Laboratorium",
    Badan: "Kami menyediakan lanyanan management laboratorium"

}

function Fitur(props) {

    return (
        <ul>
            <li>Fitur ke {props.nomor}
            </li>

        </ul>
    )
}

const DivFitur = (
    <div>
        <Fitur nomor={" 1"}/>
        <Fitur nomor={" 2"}/>
        <Fitur nomor={" 3"}/>
        <Fitur nomor={" 4"}/>
    </div>
)

export default class Welcome extends Component {
    render() {
        return (

            <MuiThemeProvider muiTheme={muiTheme}>

                <PaperMod
                    letak={'col-xs-offset-2 col-xs-10 col-md-7 col-md-offset-3 '}
                    judul={Text.Judul}
                    body={Text.Badan}
                    Optional={DivFitur}/>

            </MuiThemeProvider>

        );
    }

    testApi() {

        fetch('/pesan')
            .then(function (res) {
                return res.text();
            })
            .then(function (body) {
                console.log(body);
            });

    }

}
