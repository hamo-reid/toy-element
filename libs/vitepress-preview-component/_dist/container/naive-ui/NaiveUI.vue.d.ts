declare const _sfc_main: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    code: {
        type: StringConstructor;
        required: true;
    };
    showCode: {
        type: StringConstructor;
        required: true;
    };
    title: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    description: {
        type: StringConstructor;
        required: true;
        default: string;
    };
}>, {
    props: any;
    ns: import("../../hooks/use-namespaces").UseNameSpaceReturn;
    isCodeFold: import("vue").Ref<boolean, boolean>;
    setCodeFold: (value: boolean) => void;
    clickCopy: (value: string) => Promise<void>;
    sourceCode: import("vue").Ref<string, string>;
    showSourceCode: import("vue").Ref<string, string>;
    sourceCodeArea: import("vue").Ref<any, any>;
    clickCodeCopy: () => void;
    sourceCodeContainerHeight: import("vue").ComputedRef<any>;
    setContainerHeight: (value: number) => void;
    CodeOpen: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    CodeClose: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    CodeCopy: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    code: {
        type: StringConstructor;
        required: true;
    };
    showCode: {
        type: StringConstructor;
        required: true;
    };
    title: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    description: {
        type: StringConstructor;
        required: true;
        default: string;
    };
}>> & Readonly<{}>, {
    title: string;
    description: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _sfc_main;
