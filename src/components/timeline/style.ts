import styled from "styled-components";
interface IContainerProps {
    showBorder: boolean;
}
export const Container = styled.div`
    border-left: ${(props: IContainerProps) => props.showBorder ? "2px solid #7c292a" : ""};
    padding-left: 20px;
    h2 {
        font-size: 17px;
    }
    h3 {
        font-size: 15px;
    }
`;
