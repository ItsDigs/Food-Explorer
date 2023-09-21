import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    height: 100%;

    background-color: ${({theme}) => theme.COLORS.DARK_400};
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 150px 56px 0 56px;

    >div:first-child{
        display: flex;
        flex-direction: row;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        font-family: "Roboto", sans-serif;
        font-weight: bold;
        align-items: center;
        justify-content: center;
        gap: 11px;
        margin-bottom: 39px;
    }

    >div{
        display: flex;
        flex-direction: column;
        gap: 32px;

        >a{
            display: flex;
            color: ${({theme}) => theme.COLORS.LIGHT_100};
            font-family: "Poppins", sans-serif;
            justify-content: center;
        }
    }

    @media screen and (min-width:768px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: auto;
        align-items: center;
        padding: 90px 108px;

        >div:last-of-type{
            >p{
            color: ${({theme}) => theme.COLORS.LIGHT_100};
            font-family: "Poppins", sans-serif;
            font-weight: 400;
            font-size: 35px;
            text-align: center;
            }

            width: 475px;
            background-color: ${({theme}) => theme.COLORS.DARK_700};
            padding: 64px;
            border-radius: 16px;
        }

    }
`