import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { shallowEqual, useSelector } from "react-redux";

const SyntaxHighlighterCustom = styled(SyntaxHighlighter)`
  &:after {
    content: "${(props) => (props.comment ? props.comment : "")}";
  }
`;

type CodeTextProps = {
  codeText: string;
};

const CodeText: React.FC<CodeTextProps> = ({ codeText }) => {
  const { activeString, comment } = useSelector(
    ({ codeSettings }) => ({
      activeString: codeSettings.activeString,
      comment: codeSettings.comment,
    }),
    shallowEqual
  );

  return (
    <SyntaxHighlighterCustom
      comment={comment}
      language="javascript"
      showLineNumbers
      wrapLines={true}
      lineProps={(lineNumber: number) => {
        let style: React.CSSProperties = {
          display: "block",
        };
        if (activeString === lineNumber) {
          style.backgroundColor = "#dbffdb";
        }
        return { style };
      }}
    >
      {codeText}
    </SyntaxHighlighterCustom>
  );
};
export default CodeText;
