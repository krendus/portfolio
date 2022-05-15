import styled from "styled-components";
interface IFillProps {
    width: number;
}
export const Fill = styled.div`
    height: 100%;
    background: #7c292a;
    width: ${(props: IFillProps) => props.width + "%"};
    position: relative;
    border-radius: 10px;
    animation: slide${(props: IFillProps) => props.width} 1.2s linear;
    span {
        display: block;
        position: absolute;
        top: -2px;
        right: 0;
        border-radius: 50%;
        border: 1px solid #7c292a;
        width: 8px;
        background: #fff;
        height: 8px;
    }
    @keyframes slide${(props: IFillProps) => props.width} {
        from {
            width: 0%;
        }
        to {
            width: ${(props: IFillProps) => props.width + "%"};
        }
    }
`;

