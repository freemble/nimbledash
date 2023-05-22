var aggregatedResponse = {
  error_description: "populated_only_when_error",
  total_inferences: 7584,
  total_errors: 45,
  avg_inferences: 85748,
  avg_latency: 11.384,
  latency_trends: {
    //latency of the latest version of the model
    model1: [2.45, 4.89, 15.39],
    model2: [2.45, 4.89, 15.39],
    model3: [2.45, 4.89, 15.39],
    model4: [2.45, 4.89, 15.39],
    model5: [2.45, 4.89, 15.39],
  },
  total_inferences_trends: {
    //summation of all the version of the model
    model1: 74,
    model2: 836,
    model3: 3,
    model4: 98,
    model5: 11,
  },
  active_users_trends: {
    //summation of all the version of the model
    model1: 34235,
    model2: 453,
    model3: 34544,
    model4: 43334,
    model5: 54,
  },
};

var individualModelResponse = {
  error_description: "populated_only_when_error",
  total_inferences: 7584,
  total_errors: 45,
  avg_inferences: 85748,
  avg_latency: 11.384,
  latency_trends: {
    v1: [2.45, 4.89, 15.39],
    v2: [2.45, 4.89, 15.39],
    v3: [2.45, 4.89, 15.39],
    v4: [2.45, 4.89, 15.39],
    v5: [2.45, 4.89, 15.39],
  },
  total_inferences_trends: {
    v1: 74,
    v2: 836,
    v3: 3,
    v4: 98,
    v5: 11,
  },
  active_users_trends: {
    v1: 34235,
    v2: 453,
    v3: 34544,
    v4: 43334,
    v5: 54,
  },
};

var individualModelIndividualVersionResponse = {
  error_description: "populated_only_when_error",
  total_inferences: 7584,
  total_errors: 45,
  avg_inferences: 85748,
  avg_latency: 11.384,
  latency_trends: {
    v1: [2.45, 4.89, 15.39],
  },
  total_inferences_trends: {},
  active_users_trends: {
    v1: 34235,
  },
};

var listModelsResponse = {
  error_description: "populated_only_when_error",
  model1: ["v1", "v2", "v3"],
  model2: ["v1", "v2", "v3"],
  model3: ["v1", "v2", "v3"],
  model4: ["v1", "v2", "v3"],
  model5: ["v1", "v2", "v3"],
};
