declare const _sfc_main: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    content: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    close: {
        type: FunctionConstructor;
        required: true;
    };
}>, {
    props: any;
    ns: import("../hooks/use-namespaces").UseNameSpaceReturn;
    visible: import("vue").Ref<boolean, boolean>;
    setVisible: (value: boolean) => void;
    topHeight: import("vue").Ref<number, number>;
    setTopHeight: (value: number) => void;
    handleDestroy: () => void;
    CopySuccess: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    content: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    close: {
        type: FunctionConstructor;
        required: true;
    };
}>> & Readonly<{}>, {
    content: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _sfc_main;
