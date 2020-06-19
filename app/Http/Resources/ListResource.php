<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ListResource extends JsonResource {
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request) {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'subject' => $this->subject,
            'tags' => $this->tags,
            'questions' => $this->questions,
            'owner' => $this->owner[0],
            'relations' => $this->relations
        ];
    }
}
