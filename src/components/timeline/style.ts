import styled from "styled-components";
interface IContainerProps {
    showBorder: boolean;
}
export const Container = styled.div`
    border-left: ${(props: IContainerProps) => props.showBorder ? "2px solid #7c292a" : "2px solid transparent"};
    padding-left: 20px;
    position: relative;
    padding-bottom: 15px;
    width: 70%;
    min-width: 300px;
    a {
        text-decoration: none;
        color: #7c292a;
    }
    span {
        display: block;
        background: #fff;
        height: 15px;
        width: 15px;
        position: absolute;
        left: -8.5px;
        top: 0;
        border-radius: 50%;
        border: 2px solid #7c292a;
    }
    h2 {
        font-size: 17px;
        line-height: 13px;
        margin-bottom: 5px;
    }
    h3 {
        font-size: 15px;
    }
    p {
        font-size: 14px;
    }
`;
