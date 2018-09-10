import axios from './axiosConfig'
import qs from 'qs'
import { pageServicePath } from './../utils/variable'

const url_ = pageServicePath;
const successCode = {
  field: 'code',
  code: 200
};

export const fetchProject = id => {
  return axios({
    url_,successCode,
    method : "post",
    url : '/projects/detail',
    data: qs.stringify({
      id: id
    }),
    header : {
      'Content-Type' : 'application/json'
    },
  });
};
export const updateProject = data => {
  return axios({
    url: '/projects/update',
    url_,successCode,
    data: qs.stringify(data),
    method : "post",
    header : {
      'Content-Type' : 'application/json'
    },
  })
};
export const projectList = () => {
  return axios({
    url_,successCode,
    method : "post",
    url : '/projects/list',
    header : {
      'Content-Type' : 'application/json'
    },
  });
};
export const saveProject = data => {
  return axios({
    url: '/projects/add',
    url_,successCode,
    data: qs.stringify(data),
    method : "post",
    header : {
      'Content-Type' : 'application/json'
    },
  })
};
export const deleteProject = id => {
  return axios({
    url_,successCode,
    method : "post",
    url : '/projects/delete',
    data: qs.stringify({
      id: id
    }),
    header : {
      'Content-Type' : 'application/json'
    },
  });
};

export const fetchUtils = _ => {
  return axios({
    url_,successCode,
    method : "post",
    url : '/templates/listVueUtils',
    header : {
      'Content-Type' : 'application/json'
    },
  });
};
export const fetchLayout = theme => {
  theme = theme || "*";
  return axios({
    url_,successCode,
    method : "post",
    data: qs.stringify({
      theme
    }),
    url : '/templates/listVueLayout',
    header : {
      'Content-Type' : 'application/json'
    },
  });
};

export const fetchTemplate = theme => {
  theme = theme || "*";
  return axios({
    url_,successCode,
    url : '/templates/listVue',
    data: qs.stringify({
      theme
    }),
    method : "post",
    header : {
      'Content-Type' : 'application/json'
    },
  });
};
export const deleteTemplate = id => {
  return axios({
    url: '/templates/delete?id=' + id,
    url_,successCode,
    method : "post",
    header : {
      'Content-Type' : 'application/json'
    },
  });
};
export const updateTemplate = data => {
  return axios({
    url: '/templates/update',
    url_,successCode,
    data: qs.stringify(data),
    method : "post",
    header : {
      'Content-Type' : 'application/json'
    },
  })
};
export const updateTemplateNew = formData => {
  return axios.post('/templates/updateNew',formData,{
    url_,successCode,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};
export const addTemplate = data => {
  return axios({
    url: '/templates/add',
    url_,successCode,
    data: qs.stringify(data),
    method : "post",
    header : {
      'Content-Type' : 'application/json'
    },
  })
};

export const addTemplateNew = formData => {
  return axios.post('/templates/addNew',formData,{
    url_,successCode,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}

export const fetchPage = id => {
  return axios({
    url_,successCode,
    method : "post",
    url : '/pages/detail',
    data: qs.stringify({
      id: id
    }),
    header : {
      'Content-Type' : 'application/json'
    },
  });
};
export const updatePage = data => {
  return axios({
    url: '/pages/update',
    url_,successCode,
    data: qs.stringify(data),
    method : "post",
    header : {
      'Content-Type' : 'application/json'
    },
  })
};
export const addPage = data => {
  return axios({
    url: '/pages/add',
    url_,successCode,
    data: qs.stringify(data),
    method : "post",
    header : {
      'Content-Type' : 'application/json'
    },
  })
};
export const deletePage = id => {
  return axios({
    url_,successCode,
    method : "post",
    url : '/pages/delete',
    data: qs.stringify({
      id: id
    }),
    header : {
      'Content-Type' : 'application/json'
    },
  });
};
export const pageList = projectId => {
  return axios({
    url_,successCode,
    method : "post",
    url : '/pages/pageList',
    data: qs.stringify({
      projectId
    }),
    header : {
      'Content-Type' : 'application/json'
    },
  });
};


export const buildFile = data => {
  return axios({
    url: '/buildFile',
    url_,successCode,
    data: qs.stringify(data),
    method : "post",
    header : {
      'Content-Type' : 'application/json'
    },
  })
}


