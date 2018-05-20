function dijkstra(data, v0) {
    let S = new Array();
    let dist = new Array();
    let path = new Array();
    for (let i = 0; i < 27; i++) {
        S[i] = 0;
    }
    S[v0] = 1; // 将v0加入到集合S中
    for (let i = 0; i < 27; i++) {
        dist[i] = data[v0][i]; // v0到其他顶点的当前最短距离
        path[i] = v0; // 记录前驱
    }

    for (let i = 0; i < 27; ++i) {
        if (i != v0) {
            let min = 100,
                v = -1;
            for (let k = 0; k < 27; k++) { // 找出最小的dist[k]
                if (S[k] == 0 && dist[k] < min) {
                    v = k;
                    min = dist[k];
                }
            }
            if (v == -1) break; // 已无顶点可加入S中
            S[v] = 1; // 将顶点v并入集合S
            for (let k = 0; k < 27; k++) {
                if (S[k] == 0 && (min + data[v][k]) < dist[k]) {
                    dist[k] = min + data[v][k];
                    path[k] = v;
                }
            }
        }
    }
    for (let i = 1; i < 27; i++) {
        data[v0][i] = dist[i];
    }
    return data;
}

function tran(data) {
    for (let i = 0; i < 27; i++) {
        for (let j = i; j < 27; j++) {
            data[j][i] = data[i][j];
        }
    }
    return data;
}

function init() {
    var data = new Array();
    let str;
    let la = "";
    for (let i = 0; i < 31; i++) {
        data[i] = new Array(i);
        for (let j = 0; j < 31; j++) {
            data[i][j] = 100;
        }
    }
    const i = new Array(1, 2, 2, 2, 3, 3, 4, 4, 5, 6, 6, 6, 8, 9, 9, 10, 10, 11, 11, 12, 13, 15, 15, 16, 17, 19, 20, 21, 22, 23, 25);
    const j = new Array(2, 3, 4, 19, 5, 6, 21, 23, 7, 8, 14, 10, 17, 24, 25, 11, 12, 13, 15, 15, 16, 18, 26, 18, 25, 20, 22, 22, 23, 24, 26);
    const k = new Array(2, 1, 3, 5, 1, 1, 1, 4, 2, 2, 1, 5, 1, 2, 3, 2, 6, 2, 7, 2, 2, 2, 6, 3, 1, 2, 2, 2, 1, 1, 3);
    console.log(i, j, k);
    for (let count = 0; count < 27; count++) {
        data[i[count]][j[count]] = k[count];
    }

    for (let i = 1; i < 27; i++) {
        data = tran(data);
        data = dijkstra(data, i - 1);
    }
    for (let i = 0; i < 27; i++) {
        data[i][i] = 0;
    }
    for (let i = 0; i < 27; i++) {
        str = "";
        for (let j = 0; j < 27; j++) {
            str = str + data[i][j] + " ";
            la = data[i][j];
            for (let k = la.len; k < 5; k++) {
                str = str + " ";
            }
        }
        console.log(str);
    }
}
init();