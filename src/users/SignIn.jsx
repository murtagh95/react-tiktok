import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signIn } from '../store/user';

const SignIn = (props) => {
    let dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    let onSubmit = (data) => {
        dispatch(
            signIn(
                { credentials: data }
            )
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
           <input type="email" name="email" {...register("email")} placeholder="Correo electrónico" />
            
           <input type="password" name="password" {...register("password")} placeholder="Contraseña" />
           <input type="submit" value="Enviar"/>
        </form>
    )
}
export default SignIn;
