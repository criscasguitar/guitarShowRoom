'use strict';

/**
 * guitar service
 empezando a crawlear

*/

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::guitar.guitar');
