<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Question extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'content' => $this->content,
            'alternativeA' => $this->alternativeA,
            'alternativeB' => $this->alternativeB,
            'alternativeC' => $this->alternativeC,
            'alternativeD' => $this->alternativeD,
            'alternativeE' => $this->alternativeE,
            'tags' => $this->tags,
            'subject' => $this->subject,
            'correctAlternative' => $this->correctAlternative,
            'created_at' => $this->created_at,
            'relations' => $this->relations,
            'owner' => $this->owner,
        ];
    }
}
