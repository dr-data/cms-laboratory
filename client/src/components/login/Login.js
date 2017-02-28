import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Lock from 'material-ui/svg-icons/action/lock';
import Orang from 'material-ui/svg-icons/action/account-circle';

import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import Paper from 'material-ui/Paper';
import DividerMod from '../../modify-components/Komponen-Divider/DividerMod.js';

import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import Memory from 'material-ui/svg-icons//hardware/memory';
import People from 'material-ui/svg-icons/social/people';

import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';

import {List, ListItem} from 'material-ui/List';
import {blue500, red500, greenA200, grey900} from 'material-ui/styles/colors';

import './login.css'

const style = {
    paperLogin: {
        height: 480,
        width: 450,
        marginTop: 10,
        display: 'inline-block'
    },
    judulLogin: {

        textAlign: 'center'
    },
    lebarInput: {

        width: '80%'

    },
    bodyLogin: {

        paddingBottom: 15

    },
    block: {
        maxWidth: 250
    },
    checkbox: {
        marginBottom: 16,
        verticalAlign: 'center'

    }
};

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: red500
    }
});

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.onChange = {}

    }

    render() {

        return (

            <MuiThemeProvider muiTheme={muiTheme}>

                <div
                    style={{
                    paddingRight: 60
                }}
                    className={"col-md-10 col-md-offset-4"}>
                    <br/>
                    <br/>
                    <Paper zDepth={4} style={style.paperLogin}>
                        <div>
                            <div style={style.judulLogin}>
                                <ListItem
                                    disabled={true}
                                    rightIcon={< Memory color = {
                                    '#424242'
                                }
                                style = {{marginRight:80, width: 40, height: 40, marginTop:28}}/>}>
                                    <h3
                                        style={{
                                        fontSize: 25,
                                        color: '#424242'
                                    }}>
                                        CMS Laboratorium
                                    </h3>

                                </ListItem>
                                <DividerMod/>
                            </div>

                            <div className={"col-md-10 col-md-offset-1"}>

                                <div style={style.bodyLogin}>

                                    <div>
                                        <ListItem
                                            leftIcon={< Orang color = {
                                            '#424242'
                                        }
                                        style = {{marginLeft:25 , paddingTop:15}}/>}
                                            disabled={true}>
                                            <TextField style={style.lebarInput} hintText="Masukan Username"></TextField>
                                        </ListItem>
                                    </div>
                                    <div
                                        style={{
                                        marginTop: -17
                                    }}>
                                        <ListItem
                                            leftIcon={< Lock color = {
                                            '#424242'
                                        }
                                        style = {{marginLeft:25 , paddingTop:15}}/>}
                                            disabled={true}>
                                            <TextField style={style.lebarInput} hintText="Masukan Password"></TextField>

                                        </ListItem>

                                    </div>
                                </div>
                                <DividerMod/>
                                <div
                                    className={"col-md-offset-1"}
                                    style={{
                                    marginLeft: 30,
                                    paddingTop: 15,
                                    paddingBottom: 15
                                }}>

                                    <Checkbox label="Masuk Sebagai Admin" style={style.checkbox}/>

                                </div>
                                <DividerMod/>
                                <div
                                    style={{
                                    paddingTop: 17
                                }}
                                    className={"col-md-10 col-md-offset-1 row"}>
                                    <div >

                                        <RaisedButton label="Submit Data"/>

                                    </div>

                                    <div className={"col-md-offset-1"}>
                                        <RaisedButton label="Masuk" primary={true} type="sumbit"/>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </Paper>

                </div>
            </MuiThemeProvider>

        )

    }

}
