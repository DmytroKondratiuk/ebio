class CatalogsController < ApplicationController
  before_action :set_catalog, only: %i[show edit update destroy]
  before_action :authenticate, only: %i[destroy edit]

  # GET /catalogs or /catalogs.json
  def index
    @catalogs = Catalog.where(active: true).all
  end

  # GET /catalogs/1 or /catalogs/1.json
  def show
  end

  # GET /catalogs/new
  def new
    @catalog = Catalog.new
  end

  # GET /catalogs/1/edit
  def edit
  end

  # POST /catalogs or /catalogs.json
  def create
    @catalog = Catalog.new(catalog_params)


    respond_to do |format|
      if @catalog.save
        format.html { redirect_to @catalog, notice: I18n.t("catalogs.created"), status: :see_other }
        format.json { render :show, status: :created, location: @catalog }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @catalog.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /catalogs/1 or /catalogs/1.json
  def update
    respond_to do |format|
      if @catalog.update(catalog_params)
        format.html { redirect_to @catalog, notice: I18n.t("catalogs.updated"), status: :see_other }
        format.json { render :show, status: :ok, location: @catalog }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @catalog.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /catalogs/1 or /catalogs/1.json
  def destroy
    @catalog.destroy!

    respond_to do |format|
      format.html { redirect_to catalogs_path, notice: I18n.t("catalogs.destroyed"), status: :see_other }
      format.json { head :no_content }
    end
  end

  private

    def set_catalog
      @catalog = Catalog.find(params.expect(:id))
    end

    def catalog_params
      params.expect(
      catalog: %i[
        id user_name email phone country region city product_name description
        product_category quantity price currency active
      ]
    )
    end
end
