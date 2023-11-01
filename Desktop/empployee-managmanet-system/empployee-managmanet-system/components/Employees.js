

// import getConfig from 'next/config'
import { useState } from 'react'
// import { setCookie } from 'nookies'
import Router from 'next/router'
import styles from "/Users/da_m1_35/Desktop/empployee-managmanet-system/empployee-managmanet-system/styles/Home.module.css"


// const { publicRuntimeConfig } = getConfig();

function Employees() {

    // className={`container ${style.multiStepForm}`}

    return (
        <div className={`overflow-y:scroll; ${styles.windowMain}`} >

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">email</th>
                        <th scope="col">phone</th>
                        <th scope="col">View</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td scope="col"><button type="button" class="btn btn-secondary">View</button></td>
                        <td scope="col">
                        <button type="button" class="btn btn-warning">Edit</button>
                        </td>
                        <td scope="col">
                            <button type="button" class="btn btn-danger"> Delete</button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td scope="col"><button type="button" class="btn btn-secondary">View</button></td>
                        <td scope="col">
                        <button type="button" class="btn btn-warning">Edit</button>
                        </td>
                        <td scope="col">
                        <button type="button" class="btn btn-danger"> Delete</button></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td >Larry the Bird</td>
                        <td>Thornton</td>
                        <td>@twitter</td>
                        <td scope="col"><button type="button" class="btn btn-secondary">View</button></td>
                        <td scope="col">
                        <button type="button" class="btn btn-warning">Edit</button>
                        </td>
                        <td scope="col">
                            <button type="button" class="btn btn-danger"> Delete</button></td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td >Larry the Bird</td>
                        <td>Thornton</td>
                        <td>@twitter</td>
                        <td scope="col"><button type="button" class="btn btn-secondary">View</button></td>
                        <td scope="col">
                        <button type="button" class="btn btn-warning">Edit</button>
                        </td>
                        <td scope="col">
                            <button type="button" class="btn btn-danger"> Delete</button></td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td >Larry the Bird</td>
                        <td>Thornton</td>
                        <td>@twitter</td>
                        <td scope="col"><button type="button" class="btn btn-secondary">View</button></td>
                        <td scope="col">
                        <button type="button" class="btn btn-warning">Edit</button>
                        </td>
                        <td scope="col">
                            <button type="button" class="btn btn-danger"> Delete</button></td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td >Larry the Bird</td>
                        <td>Thornton</td>
                        <td>@twitter</td>
                        <td scope="col"><button type="button" class="btn btn-secondary">View</button></td>
                        <td scope="col">
                        <button type="button" class="btn btn-warning">Edit</button>
                        </td>
                        <td scope="col">
                            <button type="button" class="btn btn-danger"> Delete</button></td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td >Larry the Bird</td>
                        <td>Thornton</td>
                        <td>@twitter</td>
                        <td scope="col"><button type="button" class="btn btn-secondary">View</button></td>
                        <td scope="col">
                        <button type="button" class="btn btn-warning">Edit</button>
                        </td>
                        <td scope="col">
                            <button type="button" class="btn btn-danger"> Delete</button></td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td >Larry the Bird</td>
                        <td>Thornton</td>
                        <td>@twitter</td>
                        <td scope="col"><button type="button" class="btn btn-secondary">View</button></td>
                        <td scope="col">
                        <button type="button" class="btn btn-warning">Edit</button>
                        </td>
                        <td scope="col">
                            <button type="button" class="btn btn-danger"> Delete</button></td>
                    </tr>
                    <tr>
                        <th scope="row">9</th>
                        <td >Larry the Bird</td>
                        <td>Thornton</td>
                        <td>@twitter</td>
                        <td scope="col"><button type="button" class="btn btn-secondary">View</button></td>
                        <td scope="col">
                        <button type="button" class="btn btn-warning">Edit</button>
                        </td>
                        <td scope="col">
                            <button type="button" class="btn btn-danger"> Delete</button></td>
                    </tr>
                    <tr>
                        <th scope="row">10</th>
                        <td >Larry the Bird</td>
                        <td>Thornton</td>
                        <td>@twitter</td>
                        <td scope="col"><button type="button" class="btn btn-secondary">View</button></td>
                        <td scope="col">
                        <button type="button" class="btn btn-warning">Edit</button>
                        </td>
                        <td scope="col">
                            <button type="button" class="btn btn-danger"> Delete</button></td>
                    </tr>
                    <tr>
                        <th scope="row">11</th>
                        <td >Larry the Bird</td>
                        <td>Thornton</td>
                        <td>@twitter</td>
                        <td scope="col"><button type="button" class="btn btn-secondary">View</button></td>
                        <td scope="col">
                        <button type="button" class="btn btn-warning">Edit</button>
                        </td>
                        <td scope="col">
                            <button type="button" class="btn btn-danger"> Delete</button></td>
                    </tr>
                    <tr>
                        <th scope="row">12</th>
                        <td >Larry the Bird</td>
                        <td>Thornton</td>
                        <td>@twitter</td>
                        <td scope="col"><button type="button" class="btn btn-secondary">View</button></td>
                        <td scope="col">
                        <button type="button" class="btn btn-warning">Edit</button>
                        </td>
                        <td scope="col">
                            <button type="button" class="btn btn-danger"> Delete</button></td>
                    </tr>
                    <tr>
                        <th scope="row">13</th>
                        <td >Larry the Bird</td>
                        <td>Thornton</td>
                        <td>@twitter</td>
                        <td scope="col"><button type="button" class="btn btn-secondary">View</button></td>
                        <td scope="col">
                        <button type="button" class="btn btn-warning">Edit</button>
                        </td>
                        <td scope="col">
                            <button type="button" class="btn btn-danger"> Delete</button></td>
                    </tr>
                    
                </tbody>
            </table>

        </div>
    );
}

export default Employees; 