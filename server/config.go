/*
 * Copyright 2017 Kopano and its licensors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License, version 3,
 * as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

package server

import (
	"context"
	"net/http"

	"github.com/gorilla/mux"

	"stash.kopano.io/kc/konnect/config"
)

// Config defines a Server's configuration settings.
type Config struct {
	Config *config.Config

	Handler http.Handler
	Routes  []WithRoutes
}

// WithRoutes provide http routing withing a context.
type WithRoutes interface {
	AddRoutes(ctx context.Context, router *mux.Router)
}
