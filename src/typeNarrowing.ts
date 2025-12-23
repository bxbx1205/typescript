function getChai(kind: string | number) {
    if (typeof kind === 'string') {
        return `making ${kind}`
    }
    return `chai order ${kind}`
}



function serveChai(msg?: string) {
    if (msg) {
        return `Serving ${msg}`
    }

    return `serving default`

}

class kulhadChai {
    serve() {
        return `serving KC`
    }
}

class cuttingChai {
    serve() {
        return `serving Cutting`
    }
}

function server(chai: kulhadChai | cuttingChai) {
    if (chai instanceof kulhadChai) {
        return chai.serve()
    }
}

type chaiOrder = {
    type: string;
    sugar: number;
};

function ischaiOrder(obj: any): obj is chaiOrder {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    );
}

function serveOrder(item: chaiOrder | string): string {
    if (ischaiOrder(item)) {
        return `Serving ${item.type} with ${item.sugar} sugar`;
    }
    return "Invalid order";
}


function isStringarray(arr: unknown): arr is string[] {
    return Array.isArray(arr) && arr.every(item => typeof item === 'string');
}
