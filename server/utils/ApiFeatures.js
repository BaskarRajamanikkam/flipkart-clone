// Reusable search functionality class methods
class ApiFeatures {
  /**
   * constructor to initialize the search
   * @param {mongoose.Model} model - The primary model to search (e.g., Product).
   * @param {Object} query - The search query parameters.
   */
  constructor(model, query) {
    this.model = model;
    this.query = query;
    this.searchKeyword = query.keyword || "";
    this.sortOption = query.sort || "";
    this.filters = {};
  }
  /**
   * Search for related IDs in secondary models.
   * @param {mongoose.Model} model - The secondary model (e.g., Brand, Category).
   * @param {string} field - The field to search in the secondary model.
   * @returns {Promise<Array>} - Array of matching document IDs.
   */

  async findIdsByKeyword(model,field){
    if(!this.searchKeyword) return [];
    
    const results = await model.find({
      [field]: { $regex: this.searchKeyword, $options:"i"},
    });
    return results.map((result)=> result.id);
  }



  /**
   * Perform the search for the primary model.
   * @param {Array<string>} searchFields - Fields in the primary model to search.
   * @param {Array<Object>} relations - Array of relations to other models with field mapping.
   * @param {Object} numericFields -  Numeric field filters (e.g., price range).
   * @returns {Promise<Array>} - Array of matching documents.
   */

  async search(searchFields = [], relations = [], numericFields = []){

    try {



      // Find related IDs for each relation
      const relationFilters = await Promise.all(
        relations.map(async ({model, field, refField})=>{
          const ids = await this.findIdsByKeyword(model, field);
          return ids.length > 0 ? { [refField] : { $in : ids } } : null;
        })
      );
      //filter out null filters
      const validRelationFilters = relationFilters.filter(Boolean);

      const keywordsArray = this.searchKeyword.split(" ");

       // Detect numeric input
    const numericInput = keywordsArray.find((word) => !isNaN(word));
    const numericValue = numericInput ? parseFloat(numericInput) : null;

      

      //build the search query
      const queryFilters = {
        $or: [
          ...searchFields.flatMap((field) =>
            keywordsArray.map((keyword) => ({
              [field]: { $regex: keyword, $options: "i" },
            }))
          ),
          ...(numericValue ? numericFields.map((field)=>({
            [field]:numericValue,
          })) : []),
          ...validRelationFilters,
        ],
      };

      //Execute the search query with sorting
      const query = this.model
      .find(queryFilters)
      .populate("brand","name")
      .populate("category","name")
   

      if(this.sortOption){
        query.sort(this.sortOption)
      }

      return query;
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = ApiFeatures;
