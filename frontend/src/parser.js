let finalConfig = [];

// func to PVs
export const paramterValuesMapping = (node_array, edges_array) => {
  for (let i = 0; i < node_array.length; i++) {
    // choose only those nodes which are xmi:type - uml:OpaqueAction

    let v = [];

    if (node_array[i]["$"]["xmi:type"] === "uml:OpaqueAction") {
      let node_xmi_id = node_array[i]["$"]["xmi:id"];

      for (let j = 0; j < edges_array.length; j++) {
        if (node_xmi_id === edges_array[j]["$"]["source"]) {
          let edge_target = edges_array[j]["$"]["target"];

          for (let k = 0; k < edges_array.length; k++) {
            if (edge_target === edges_array[k]["$"]["source"]) {
              if (
                edges_array[k]["$"]["name"] &&
                !v.includes(edges_array[k]["$"]["name"])
              ) {
                if (edges_array[k]["$"]["name"].includes("%20")) {
                  v.push(edges_array[k]["$"]["name"].replace(/%20/g, " "));
                }

                //
                else if (edges_array[k]["$"]["name"].includes("%3C=")) {
                  v.push(edges_array[k]["$"]["name"].replace(/%3C=/g, " <= "));
                }

                //
                else if (edges_array[k]["$"]["name"].includes("%3E=")) {
                  v.push(edges_array[k]["$"]["name"].replace(/%3E=/g, " >= "));
                }

                //
                else if (edges_array[k]["$"]["name"].includes("%3C")) {
                  v.push(edges_array[k]["$"]["name"].replace(/%3C/g, " < "));
                }

                //
                else if (edges_array[k]["$"]["name"].includes("%3E")) {
                  v.push(edges_array[k]["$"]["name"].replace(/%3E/g, " > "));
                }

                //
                else {
                  v.push(edges_array[k]["$"]["name"]);
                }
              }
            }
          }
        }
      }
    }

    if (v.length > 0) {
      // if array length is not empty
      finalConfig.push({
        p: node_array[i]["$"]["name"].replace(/%20/g, " "),
        v: v,
      });
    }
  }

  // console.log(finalConfig);

  return finalConfig;
};

export const scriptRunner = (data) => {
  return new Promise((resolve, reject) => {
    data = JSON.stringify(data);
    let parser = JSON.parse(data);

    console.log(parser);

    let node_array = []; // this array will store all the decision nodes
    let edges_array = []; // this array will store all the edges
    let temp;
    // collect the nodes from wherever it is possible.

    temp = parser["xmi:XMI"]["uml:Model"]["packagedElement"]["groups"]["node"];
    for (let i = 0; i < temp.length; i++) {
      node_array.push(temp[i]);
    }

    temp = parser["xmi:XMI"]["uml:Model"]["packagedElement"]["edge"];
    for (let i = 0; i < temp.length; i++) {
      edges_array.push(temp[i]);
    }
    // parameters values mapping
    let result = paramterValuesMapping(node_array, edges_array);

    if (result) {
      resolve(result);
    } else {
      reject("error occurred");
    }
  });
};
